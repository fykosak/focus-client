
export type availableLanguages = 'cs' | 'en' | 'pl' | 'de';
export type localisedType<T> = {
    [key in availableLanguages | 'common']?: T;
}
