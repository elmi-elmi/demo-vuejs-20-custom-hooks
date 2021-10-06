
import { ref, computed, watch } from "vue";

export default function userSearch(items, serachProp) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableUsers = computed(function () {
        let filteredItems = [];
        if (activeSearchTerm.value) {
            filteredItems = items.filter((item) =>
                item[serachProp].includes(activeSearchTerm.value)
            );
        } else if (items) {
            filteredItems = items;
        }
        return filteredItems;
    });

    watch(enteredSearchTerm, function (newValue) {
        setTimeout(() => {
            if (newValue === enteredSearchTerm.value) {
                activeSearchTerm.value = newValue;
            }
        }, 300);
    });

    function updateSearch(val) {
        enteredSearchTerm.value = val;
    }

    return { enteredSearchTerm, availableUsers, updateSearch }
}