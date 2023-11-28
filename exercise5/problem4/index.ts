class Timer { 
    private startTime: number | null; 
    private pausedTime: number; 
    private isPaused: boolean; 
   
    constructor() { 
      this.startTime = null; 
      this.pausedTime = 0; 
      this.isPaused = false; 
    } 
   
    start() { 
      if (!this.startTime) { 
        this.startTime = Date.now(); 
        this.isPaused = false; 
      } 
    } 
   
    pause() { 
      if (this.startTime && !this.isPaused) { 
        this.pausedTime = this.getTimeElapsed(); 
        this.startTime = null; 
        this.isPaused = true; 
      } 
    } 
   
    reset() { 
      this.startTime = null; 
      this.pausedTime = 0; 
      this.isPaused = false; 
    } 
   
    log() { 
      const elapsed = this.isPaused ? this.pausedTime : this.getTimeElapsed(); 
      const { hours, minutes, seconds, milliseconds } = 
        this.calculateTimeParts(elapsed); 
   
      console.log({ h: hours, m: minutes, s: seconds, ms: milliseconds }); 
    } 
   
    private getTimeElapsed() { 
      return Date.now() - this.startTime! + this.pausedTime; 
    } 
   
    private calculateTimeParts(elapsed: number) { 
      const milliseconds = elapsed % 1000; 
      const seconds = Math.floor(elapsed / 1000) % 60; 
      const minutes = Math.floor(elapsed / (1000 * 60)) % 60; 
      const hours = Math.floor(elapsed / (1000 * 60 * 60)); 
   
      return { hours, minutes, seconds, milliseconds }; 
    } 
  } 
   
  export default Timer;