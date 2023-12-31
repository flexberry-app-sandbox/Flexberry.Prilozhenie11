import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie1.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie1.title'),
          children: [{
            link: 'i-i-s-prilozhenie1-спр-контр-аг-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie1.i-i-s-prilozhenie1-спр-контр-аг-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie1.i-i-s-prilozhenie1-спр-контр-аг-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})