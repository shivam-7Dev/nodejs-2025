/**
 * Option 1: time (Highly Recommended)
 * method one(linux)=>  /usr/bin/time -v node 04.js
    Maximum resident set size (kbytes): 
        This is the peak RAM your process used. 
        This is the most accurate memory usage metric.
    User time (seconds): 
        CPU time spent running your code.
    System time (seconds): 
        CPU time spent on system calls (like I/O) on behalf of your code.
    Percent of CPU this job got: 
        The average CPU utilization during the run
 */

/**
 * Option two =>  pidstat [node 04.js & pid=$!; pidstat -p $pid -r -u 1]
 * 
    # Run the script in the background (&) and get its PID ($!)

    # Then, run pidstat every 1 second (-p $pid 1) until the process ends.
   
    node 04.js & pid=$!; pidstat -p $pid -r -u 1
 */

/**
* option 3:
* Run htop in your terminal.
Press F4 (Filter).
Type part of your script's name, like 04.js.
Quickly run node 04.js in another terminal.
     */

/**
 * node 04.js & pid=$!; pidstat -p $pid -r -u 1 > pidstat_output.txt 2>&1
 * This does:
    > redirects stdout (normal output)
    2>&1 redirects stderr (errors) to stdout, so both go into the file

 */

/**
 * node 04.js & pid=$!; pidstat -p $pid -r -u 1 | tee pidstat_output.txt
 * 
 * This will:
    Display output on the terminal and
    Save it to pidstat_output.txt
 */
