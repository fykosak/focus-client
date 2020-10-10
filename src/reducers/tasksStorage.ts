import { Action } from 'redux';
import { localisedType } from '@app/components/lang/interface';

export interface TaskFactoryInputDefinition {
    type: 'string' | 'int' | 'real' | 'perm'; // TODO
    label: localisedType<string>;
    description?: localisedType<string>;
    unit?: string;
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
    status: 'available' | 'skipped' | 'pending' | 'solved' | 'passed';
    files: localisedType<string[]>;
    label: localisedType<string>;
    name: localisedType<string>;
    factory: TaskFactoryDefinition;
    stats: any;
}

export interface TasksStorage {
    tasks: TaskDefinition[],
    lines: any[],
}

const intData: TasksStorage = { // TODO temp data
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
                        unit: 'cm'
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
                        unit: 'cm'
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

export const tasksStorage = (state: TasksStorage = intData, action: Action<string>) => {
    switch (action.type) {
        default:
            return state;
    }
}
