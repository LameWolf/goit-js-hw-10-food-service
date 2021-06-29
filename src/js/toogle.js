const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const switchToogle = document.querySelector('#theme-switch-toggle');
switchToogle.addEventListener('change', changeTheme);

const usedTheme = localStorage.getItem('curTheme');

function currentTheme(themeName) {
  localStorage.setItem('curTheme', themeName);
  document.body.className = themeName;
}

function changeTheme(evt) {
  if (evt.target.checked) {
    currentTheme(DARK);
  } else {
    currentTheme(LIGHT);
  }
}

function checkTheme() {
  if (usedTheme === DARK) {
    document.body.className = usedTheme;
    switchToogle.checked = true;
  }
}

window.onload = checkTheme();
