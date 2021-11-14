interface OrderList {
    // eslint-disable-next-line no-use-before-define
    info: Array<Info>
}

interface Info {
    address: string | undefined;
    class: number | undefined;
    className: string | undefined;
    isBundle: boolean | undefined;
    name: string| undefined;
}

interface Option {
    lv1: Array<Info> | undefined
    lv2: Array<Info> | undefined
    lv3: Array<Info> | undefined
}

export { OrderList, Option, Info }
