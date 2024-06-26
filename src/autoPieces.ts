import { State } from './state.js';
import {
  key2pos,
  createEl,
  posToTranslate as posToTranslateFromBounds,
  translateAndScale,
  pieceClasses as pieceNameOf,
} from './util.js';
import { whitePov } from './board.js';
import * as cg from './types.js';
import { DrawShape } from './draw.js';
import { SyncableShape, Hash, syncShapes } from './sync.js';

export function render(state: State, autoPieceEl: HTMLElement): void {
  const autoPieces = state.drawable.autoShapes.filter(autoShape => autoShape.piece);
  const autoPieceShapes: SyncableShape[] = autoPieces.map((s: DrawShape) => {
    return {
      shape: s,
      hash: hash(s),
      current: false,
    };
  });

  syncShapes(autoPieceShapes, autoPieceEl, shape => renderShape(state, shape, state.dom.bounds()));
}

export function renderResized(state: State): void {
  const asWhite: boolean = whitePov(state),
    posToTranslate = posToTranslateFromBounds(state.dom.bounds(), state.dimensions);
  let el = state.dom.elements.autoPieces?.firstChild as cg.PieceNode | undefined;
  while (el) {
    translateAndScale(el, posToTranslate(key2pos(el.cgKey), asWhite), el.cgScale);
    el = el.nextSibling as cg.PieceNode | undefined;
  }
}

function renderShape(state: State, { shape, hash }: SyncableShape, bounds: ClientRect): cg.PieceNode {
  if (shape.piece) {
    const orig = shape.orig;
    const scale = shape.piece.scale;
    const faction = shape.piece?.faction;

    const pieceEl = createEl(`piece ${faction}`, pieceNameOf(shape.piece, state.orientation)) as cg.PieceNode;
    pieceEl.setAttribute('cgHash', hash);
    pieceEl.cgKey = orig;
    pieceEl.cgScale = scale;
    translateAndScale(
      pieceEl,
      posToTranslateFromBounds(bounds, state.dimensions)(key2pos(orig), whitePov(state)),
      scale
    );

    return pieceEl;
  } else {
    return createEl('piece', '') as cg.PieceNode;
  }
}

const hash = (autoPiece: DrawShape): Hash =>
  [autoPiece.orig, autoPiece.piece?.role, autoPiece.piece?.color, autoPiece.piece?.faction, autoPiece.piece?.scale].join(',');
