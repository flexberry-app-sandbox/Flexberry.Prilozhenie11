import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie1СпрКонтрАгLForm from './forms/i-i-s-prilozhenie1-спр-контр-аг-l';
import IISPrilozhenie1СпрКонтрАгEForm from './forms/i-i-s-prilozhenie1-спр-контр-аг-e';
import IISPrilozhenie1СпрКонтрАгModel from './models/i-i-s-prilozhenie1-спр-контр-аг';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie1-спр-контр-аг': IISPrilozhenie1СпрКонтрАгModel
  },

  'application-name': 'Prilozhenie1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie1',
          title: 'Prilozhenie1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        prilozhenie1: {
          caption: 'Prilozhenie1',
          title: 'Prilozhenie1',
          'i-i-s-prilozhenie1-спр-контр-аг-l': {
            caption: 'Спр контр аг',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie1-спр-контр-аг-l': IISPrilozhenie1СпрКонтрАгLForm,
    'i-i-s-prilozhenie1-спр-контр-аг-e': IISPrilozhenie1СпрКонтрАгEForm
  },

});

export default translations;
