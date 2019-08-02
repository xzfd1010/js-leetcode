// 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。
//
// 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。
//
// 你的实现应该支持如下操作：
//
//
// MyCircularQueue(k): 构造器，设置队列长度为 k 。
// Front: 从队首获取元素。如果队列为空，返回 -1 。
// Rear: 获取队尾元素。如果队列为空，返回 -1 。
// enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
// deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
// isEmpty(): 检查循环队列是否为空。
// isFull(): 检查循环队列是否已满。
//
// 示例：
//
// MyCircularQueue circularQueue = new MycircularQueue(3); // 设置长度为 3
//
// circularQueue.enQueue(1);  // 返回 true
//
// circularQueue.enQueue(2);  // 返回 true
//
// circularQueue.enQueue(3);  // 返回 true
//
// circularQueue.enQueue(4);  // 返回 false，队列已满
//
// circularQueue.Rear();  // 返回 3
//
// circularQueue.isFull();  // 返回 true
//
// circularQueue.deQueue();  // 返回 true
//
// circularQueue.enQueue(4);  // 返回 true
//
// circularQueue.Rear();  // 返回 4
//
// 提示：
//
// 所有的值都在 0 至 1000 的范围内；
// 操作数将在 1 至 1000 的范围内；
// 请不要使用内置的队列库。
//
// 队列可以用来打点，把所有打点的任务放到队列中

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
export default class MyCircularQueue {
  constructor (k) {
    // 用来保存数据长度为k的数据结构
    this.list = Array(k)
    // 队首指针
    this.front = 0
    // 队尾指针
    this.rear = 0
    // 队列长度
    this.max = k
  }
  /**
   * Insert an element into the circular queue. Return true if the operation is successful.
   * @param {number} num
   * @return {boolean}
   */
  enQueue (num) {
    // 先判断队列长度是否已经超过限度 isFull
    if (this.isFull()) {
      return false
    } else {
      this.list[this.rear] = num
      this.rear = (this.rear + 1) % this.max
      return true
    }
  }
  /**
   * Delete an element from the circular queue. Return true if the operation is successful.
   * @return {boolean}
   */
  deQueue () {
    if (this.isEmpty()) {
      return false
    } else {
      this.list[this.front] = undefined
      this.front = (this.front + 1) % this.max
      return true
    }
  }
  /**
   * Checks whether the circular queue is empty or not.
   * @return {boolean}
   */
  isEmpty () {
    // 指针都指在同一个元素，并且这个元素为空
    return this.front === this.rear && !this.list[this.front]
  }
  /**
   * Checks whether the circular queue is full or not.
   * @return {boolean}
   */
  isFull () {
    // 指针都指在同一个元素，并且这个元素存在
    return this.front === this.rear && !!this.list[this.front]
  }
  /**
   * Get the front item from the queue.
   * @return {number}
   */
  Front () {
    if (this.isEmpty()) {
      return -1
    } else {
      return this.list[this.front]
    }
  }
  /**
   * Get the last item from the queue.
   * @return {number}
   */
  Rear () {
    // 队列 full 的情况需要考虑
    if (this.isEmpty()) {
      return -1
    } else {
      let rear = this.rear - 1 >= 0 ? this.rear - 1 : this.max - 1
      return this.list[rear]
    }
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
