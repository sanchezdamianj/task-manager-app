export const TODO_FILTERS = {
    ALL : 'all',
    ACTIVE : 'active',
    COMPLETED : 'completed'
} as const;


export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL] : {
        literal: 'All',
        href: `/?filters=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE] : {
        literal: 'On going',
        href: `/?filters=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED] : {
        literal: 'Done',
        href: `/?filters=${TODO_FILTERS.COMPLETED}`
    }
} as const;
