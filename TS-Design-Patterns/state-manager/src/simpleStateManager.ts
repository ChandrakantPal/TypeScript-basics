import * as React from 'react'

function createSubscribable<MessageType>() {
  const subscribers: Set<(msg: MessageType) => void> = new Set()
  return {
    subscribe(cb: (msg: MessageType) => void): () => void {
      subscribers.add(cb)
      return () => {
        subscribers.delete(cb)
      }
    },
    publish(msg: MessageType): void {
      subscribers.forEach((cb) => cb(msg))
    },
  }
}

export function createStateHook<DataType>(
  initialValue: DataType
): () => [DataType, (value: DataType) => void] {
  const subscribers = createSubscribable<DataType>()

  return () => {
    const [value, setValue] = React.useState<DataType>(initialValue)

    React.useEffect(() => subscribers.subscribe(setValue), [])

    return [
      value,
      (v: DataType) => {
        setValue(v)
        subscribers.publish(v)
      },
    ]
  }
}
