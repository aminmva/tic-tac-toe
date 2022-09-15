var num = 1;
const table_list = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const tables_id = ['a_1','a_2','a_3','a_4','a_5','a_6','a_7','a_8','a_9'];
function myfunc(table_id) {
    if (num == 1){
        if (document.getElementById(table_id).innerHTML == 'O' || document.getElementById(table_id).innerHTML == 'X') {
            //pass
        }
        else {
            for (i in tables_id) {
                if (table_id == tables_id[i]) {
                    table_list[i] = 1;
                    document.getElementById(table_id).innerHTML = 'X';
                    num++;
                }
            }
        }
    }
    else if (num == 2) {
        if (document.getElementById(table_id).innerHTML == 'X' || document.getElementById(table_id).innerHTML == 'O') {
            //pass
        }
        else {
            for (i in tables_id) {
                if (table_id == tables_id[i]) {
                    table_list[i] = 2;
                    document.getElementById(table_id).innerHTML = 'O';
                    num--;
                }
            }
        }
    }
    const win = [
        [table_list.slice(0,3)],
        [table_list.slice(3,6)],
        [table_list.slice(6,9)],
        [[table_list[0]], [table_list[3]], [table_list[6]]],
        [[table_list[1]], [table_list[4]], [table_list[7]]],
        [[table_list[2]], [table_list[5]], [table_list[8]]],
        [[table_list[0]], [table_list[4]], [table_list[8]]],
        [[table_list[2]], [table_list[4]], [table_list[6]]],
    ]
    for (i in win) {
        if (win[i] == '1,1,1') {
            alert('X win')
        }
        if (win[i] == '2,2,2') {
            alert('O win')
        }
    }
}