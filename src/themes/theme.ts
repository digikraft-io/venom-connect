import { getThemeWithFallback } from './helpers';

export let theme = {
  name: 'valicit_theme' as const,
  theme: getThemeWithFallback({
    common: {
      text: {
        color: '#000000'
      },
      backdrop: {
        color: '#efefef',
        opacity: 0.5,
        backdropFilter: 'blur(10px)'
      }
    },

    popup: {
      background: {
        color: '#ffffff'
      },
      border: {
        width: 1,
        color: '#ddd',
        borderRadius: 16
      },
      closeCross: {
        color: '#999',
        hoverColor: '#666'
      },
      badgeColor: '#666',
      scroll: {
        color: '#efefef'
      }
    },

    item: {
      background: {
        color: '#efefef'
      },
      border: {
        width: 1,
        borderWidth: 0,
        borderHoverColor: '#efefef',
        color: '#efefef',
        hoverColor: '#00AAFF',
        pressedColor: '#00AAFF'
      },
      warning: {
        background: {
          color: '#ffa502'
        },
        text: {
          color: '#000000'
        }
      },
      icon: {
        main: {
          color: '#666'
        },
        subTitle: {
          color: '#666'
        }
      }
    }
  })
};
