export default class Timer {
  private callback: () => void
  private delay: number
  private remaining: number

  private timer: number | NodeJS.Timeout | undefined
  private startedAt: number

  constructor(callback: () => void, delay: number) {
    this.callback = callback
    this.delay = delay
    this.startedAt = Date.now()
    this.remaining = delay
    this.timer = setTimeout(callback, delay)
  }

  /**
   * Pause the timer
   */
  public pause() {
    if (!this.timer) return
    clearTimeout(this.timer)
    this.timer = undefined
    this.remaining -= Date.now() - this.startedAt
  }

  /**
   * Resume the timer
   */
  public resume() {
    if (this.timer) return
    this.startedAt = Date.now()
    this.timer = setTimeout(this.callback, this.remaining)
  }

  /**
   * Return the initial timer delay
   */
  public getDelay() {
    return this.delay
  }

  /**
   * Return the current remaining delay
   */
  public getRemaing() {
    return this.remaining
  }
}