/*
function parsing Date String into date and time string
 */
export const splitDateTime = (dateString) =>{
    if (dateString){
        const [date,time] = dateString.split('T')
        return {date: date, time: time}
    }else{
        return {date: '', time: ''}
    }

}
/*
function parsing date and time string into DateString
 */
export const concatDateTime = (date, time) => {
    const dateTimeString = `${date}T${time}`
    return dateTimeString
}