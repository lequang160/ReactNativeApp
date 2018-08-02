export const CHANGE_THEME_COLOR = 'CHANGE_THEME_COLOR';

export const changeThemeColor = color =>
{
    return {
        type : CHANGE_THEME_COLOR,
        color : color,
    };
};