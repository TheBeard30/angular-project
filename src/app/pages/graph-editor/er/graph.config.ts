import {CellView, Markup, Shape} from "@antv/x6";
import {Subject} from "rxjs";

export const labelContentSubject = new Subject<any>();

export const getConfig = (graphElement: HTMLElement,minimapElement: HTMLElement) => ({
  container: graphElement,
  grid: true,
  history: true,
  background: {
      color: 'rgb(255,255,255)'
  },
  scroller: {
    enabled: true,
    pageVisible: true,
    pageBreak: false,
    pannable: true,
  },
  minimap: {
    enabled: true,
    container: minimapElement,
    width: 200,
    height: 100
  },
  connecting: {
    router: {
      name: 'er',
      args: {
        offset: 25,
        direction: 'H',
      },
    },
    createEdge() {
      console.log('create edge');
      return new Shape.Edge({
        attrs: {
          line: {
            stroke: '#4D7AE3',
            strokeWidth: 2,
            sourceMarker: 'diamond',
            targetMarker: 'diamond'
          },
        },
        defaultLabel: {
          markup: Markup.getForeignObjectMarkup(),
          attrs: {
            fo: {
              width: 80,
              height: 50,
              y: -25,
            },
          },
        },
        label: {
          position: 0.35,
        },
      })
    },
  },
  autoResize: true,
  snapline: true,
  onEdgeLabelRendered(args) {
    const { selectors } = args;
    console.log(args);
    const content = selectors.foContent as HTMLDivElement;
    labelContentSubject.next(content);
    if (content) {
      const container = document.createElement('div');
      container.style.padding = '10px';
      container.classList.add('edge-label-container');
      const element = document.createElement('div');
      element.classList.add('diamond');
      container.appendChild(element);

      const rightElement = document.createElement('div');
      rightElement.classList.add('diamond');
      rightElement.classList.add('right');
      const subElement = document.createElement('div');
      subElement.classList.add('cross');
      rightElement.appendChild(subElement);
      container.appendChild(rightElement);

      content.appendChild(container);
    }
  }
} as any);
