type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    // Add at the begining 
    prepend(item: T): void {
        const node = {value: item} as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }


    // Add at the index position 
    insertAt(item: T, index: number ): void {

        this.length++;
        if (index > this.length) {
            throw new Error("to big");
        }else if (index === this.length) {
            this.append(item);
            return;
        }else if (index == 0) {
            this.prepend(item);
            return;
        }

        let curr = this.head;
        for (let i = 0; curr && i<index ; ++i) {
            curr = curr.next;
        }
        curr = curr as Node<T>;
        const node = {value: item} as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (node.prev) {
           node.prev.next = curr; 
        }
    }

    append(item: T): void {

        this.length++
        const node = {value: item } as Node<T>;
        if (!this.tail) {
           this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;

    }


    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }
        if (curr === this.tail) {
            this.tail = curr.prev;
        }
        curr.prev = curr.next = undefined;
        return curr.value;
    }

    get(index: number): T | undefined {
        if (index > this.length) {
            throw new Error("to big");
            return undefined;
        }
        if (index < 0) {
            throw new Error("there is no index like that")
            return undefined;
        }
        let curr = this.head;
        for (let i = 0; curr && i < this.length; ++i) {
            if (i === index) {
                return curr?.value;
            }
            curr = curr?.next
        }
    }
}
