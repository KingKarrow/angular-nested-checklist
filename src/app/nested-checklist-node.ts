export interface INestedChecklistNode {
    name: string,
    checked: boolean,
    index?: number,
    children?: INestedChecklistNode[],
    parent?: number
}
