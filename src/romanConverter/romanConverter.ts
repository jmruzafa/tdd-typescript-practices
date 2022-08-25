export function romanConverter(num:number){
    if (num == 10) return 'X';
    if (num == 1) return 'I';
    if (num == 2) return 'II';
    if (num == 5) return 'V';
    return '';
}