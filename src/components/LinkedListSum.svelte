<script>
    // var LinkedList = require('linked-list');
    import LinkedList from './utils/LinkedList.js'

    let list1 = new LinkedList();
    list1.append(9);
    list1.append(9);
    let list2 = new LinkedList();
    list2.append(5);
    list2.append(2);

    let mergedList = new LinkedList();

    function sumLists(list1, list2) {
        // * Step through the lists simultaneously

        // * At each step grab the values, weight them by 10 * currentStep and add them to sumLists
        
        
    }
</script>

<div>
    <span>List 1: {list1.toArray().join(" ")}</span>
    <br />
    <span>List 2: {list2.toArray().join(" ")}</span>
    <br />
    <button on:click={() => sumLists(list1, list2)}>Sum Lists</button>
    <br />
    <span>Sum List: {mergedList.toArray().join(" ")}</span>
</div>