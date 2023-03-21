import moment from 'moment';
export const trimString = (data:string, maxLenght:number) =>{
    if( data && data.length > maxLenght){
        return data.substring(0, maxLenght) + '...'
    }
    return data;
}

export const parseDate = (data:string| undefined):string =>{
    if(!data) return '';
    return moment(data).format('YYYY-MM-DD HH:mm:ss');
}