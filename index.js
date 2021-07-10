function getNoteAppId() {
    let noteAppObject = getExistingAppNotes()
    if (!noteAppObject) {
        return 1
    }
    const keysArray = Object.keys(noteAppObject)
    const numberKeys = keysArray.map((key)=>Number(key))
    console.log(numberKeys)
    return Math.max( ... numberKeys) + 1
}

function getExistingAppNotes() {
    let appNotes = localStorage.getItem('notes')
    if (!appNotes) {
        return null
    }
    return JSON.parse(appNotes)
}