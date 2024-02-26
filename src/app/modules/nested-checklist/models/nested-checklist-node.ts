export interface INestedChecklistNode {
    name: string,
    checked: boolean,
    children?: INestedChecklistNode[],
    index?: number, // assigned automatically
    parent?: number // assigned automatically
}

export interface INestedChecklistConfigNode {
    name: string,
    checked: boolean
}

export class NestedChecklistNode implements INestedChecklistNode {
    constructor(
        public name: string,
        public checked: boolean,
        public index: number = -1,
        public parent: number = -1,
        public children: INestedChecklistNode[] = []
    ) { }

    static fromConfig(configNode: INestedChecklistConfigNode) {
        return new NestedChecklistNode(configNode.name, configNode.checked);
    }
}
