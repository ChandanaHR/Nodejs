Thread: A thread is the smallest unit of execution inside a process.
        Normally, servers like Java or PHP create a new thread per request → costly in memory & CPU.
        Node.js uses one main thread (event loop) + a small thread pool for heavy I/O.

Event Loop:The event loop is the traffic controller of Node.js.
            It’s a single thread that constantly checks:
                Do we have simple tasks (like arithmetic, JSON parsing, or callbacks)?
                Do we have I/O operations finished and ready to return?
                If yes → it executes them. If not → it keeps waiting.

Thread Pool: Some tasks can’t be handled in the single-threaded event loop directly (like file system, DNS lookups, encryption, compression).
              Once the work is done, results are queued back for the event loop to execute.

Finally:
Event Loop: Handles JavaScript tasks and decides if work needs to be delegated.
Thread Pool: Handles expensive async tasks (file system, crypto, etc.) in background.
Threads: Execution workers. Node.js minimizes their use, unlike traditional servers.
Event Loop runs all the normal JavaScript code & timers.
Thread Pool handles heavy I/O & CPU tasks in background.
Threads are the workers inside the pool doing that actual job

hink of Node.js like a restaurant:
Event Loop = Head waiter (takes orders, manages tables).
Thread Pool = Kitchen staff (do the heavy cooking in parallel).
Threads = Individual cooks inside the kitchen.
Result → Head waiter delivers the finished meal (callback) to the right table.


What is Node.js and core componenets
// Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside the browser.
Core components
V8 Engine-> Developed by Google (used in Chrome).
            Compiles JavaScript into machine code for fast execution.
            V8 takes this JS, compiles, and runs it directly on your system.
Libuv->  A C library that provides the event loop, thread pool, and asynchronous I/O.
          Handles tasks like file system operations, networking, timers, and DNS lookup.
Non-blocking I/O -> In traditional (blocking) I/O, the program waits until a task (like reading a file) finishes before moving to the next line.
                    In Node.js (non-blocking I/O), tasks run asynchronously → Node.js continues executing other code while waiting for I/O operations.
Event Loop -> Heart of Node.js.
              Listens for events and executes callbacks.
              Ensures Node.js handles many requests on a single thread.
