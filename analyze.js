/* --- Contains project analysis functions. --- */

/* Top-level analysis function, checks for appropraite number of sprites
   and initializes script analysis. */
function analyze(fileObj) {
    var pID = fileObj.info.projectID
    var gradeObj = new GradeEvents();
    gradeObj.grade(fileObj,pID);
    report(pID,gradeObj.requirements);
}

/* Returns pass/fail symbol. */
function checkbox(bool) {
    if (bool) return '✔️';
    else return '❌';
}

/* Reports results. */
function report(pID, dict) {

    var ret_list = [];

    ret_list.push('Project ID: ' + pID);
    for(var x in dict) {
        ret_list.push(checkbox(dict[x]) + 
            ' - ' + String(x));
    }

    reports_list.push(ret_list);
    printReport();        
}