import { Action } from 'redux';
import { localisedType } from '@app/components/lang/interface';

export interface TaskFactoryInputDefinition {
    type: 'string' | 'int' | 'real' | 'perm'; // TODO
    label: localisedType<string>;
    description?: localisedType<string>;
    units: string[];
}

export interface TaskFactoryDefinition {
    type: 'default';
    inputs: {
        [key: string]: TaskFactoryInputDefinition;
    }
}

export interface TaskDefinition {
    taskId: number;
    lineId: number;
    status: 'available' | 'skipped' | 'pending' | 'solved' | 'passed' | 'timeouted'; // TODO
    files: localisedType<string[]>;
    label: localisedType<string>;
    name: localisedType<string>;
    factory: TaskFactoryDefinition;
    stats: null;
}

export interface LineDefinition {
    name: localisedType<string>;
    lineId: number;
}

export interface TasksStorageState {
    tasks: TaskDefinition[],
    lines: LineDefinition[],
}

const intData: TasksStorageState = { // TODO temp data
    tasks: [
        {
            taskId: 1234,
            label: {
                common: 'X1',
            },
            files: {
                pl: [
                    'http:aaa.com/hash1.pl.pdf',
                    'http:bbb.com/hash2.pl.pdf',
                    'http:ccc.com/hash3.pl.pdf',
                    'http:ddd.com/hash3.pl.pdf',
                    'http:eee.com/hash3.pl.pdf',
                    'http:fff.com/hash3.pl.pdf',
                ],
            },
            status: 'available',
            stats: null,
            lineId: 1,
            name: {
                cs: 'Šla Nanynka do zeli',
                en: 'Nanynka is a bitch',
                pl: 'Nanynka szuka drogu do kurvy, kurva!',
            },
            factory: {
                type: 'default',
                inputs: {
                    '0': {
                        type: 'int',
                        label: {
                            cs: 'vagina',
                            en: 'vagina',
                            pl: 'pochwa'
                        },
                        description: {
                            cs: 'hlbka vagina',
                            en: 'vagina depth',
                            pl: 'pochwa głębokość'
                        },
                        units: ['cm', 'mm', 'um']
                    },
                    '1': {
                        type: 'string',
                        label: {
                            cs: 'penis',
                            en: 'penis',
                            pl: 'kutas'
                        },
                        description: {
                            cs: 'dlžka penisu',
                            en: 'penis lenght',
                            pl: 'kutas długość'
                        },
                        units: ['cm']
                    },
                    '2': {
                        type: 'real',
                        label: {
                            cs: 'kozy',
                            en: 'kozy',
                            pl: 'cicky'
                        },
                        description: null,
                        units: []
                    }
                }
            }
        }
    ],
    lines: [
        {
            name: {
                common: 'Main line',
            },
            lineId: 1,
        },
        {
            name: {
                common: 'Hurry up',
            },
            lineId: 2,
        }
    ],
}

export const tasksStorage = (state: TasksStorageState = intData, action: Action<string>): TasksStorageState => {
    switch (action.type) {
        default:
            return state;
    }
}
