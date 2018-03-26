function add_to_end_list(list, item){
    if(!list){
        item.next = null
        return item
    }

let curr = list
while (curr.next)
curr = curr.next

curr.next = item
item.next = null
return list
}

function add_to_start_list(list, item){
    if(!list){
        item.next = null
        return item
    }

    item.next = list
    return item
}

function remove_from_list(list, item){
    if (list == item){
        let new_list = list.next
        list.next = null
        return new_list
    }

    let prev = null
    let curr = list

    while (curr) {
        if (curr == item){
            prev.next = item.next
            item.next = null
            return list
        }
        prev = curr
        curr = curr.next
    }

    return list
}

function search_in_list (list, nmbr){
    let curr = list
    while (curr){
        if (curr.value == nmbr){
            return curr
        }
        curr = curr.next
    }
    return undefined
}

function number_to_list(nmbr){
    let list = null
    while (nmbr > 0){
        let digit = nmbr %10
        nmbr = Math.floor(nmbr/10)
        list = add_to_start_list(list, {value: digit})
    }
    return list
}

function add_list(list1, list2){
    let list = null
    let curr1 = list1
    let curr2 = list2
    let add = 0
    while (curr1 || curr2 || add > 0){
        let res = add
        if(curr1){
            res = res + curr1.value
            curr1 = curr1.next
        }
        if (curr2){
            res = res + curr2.value
            curr2 = curr2.next
        }
        list = add_to_end_list(list, {value: res%10})
        add = Math.floor(res/10)
    }
    return list
}
