export interface dataMenu {
    name: string,
    icon?: string,
    route?: string,
    main?: boolean,
    submenu?: dataMenu[]
}