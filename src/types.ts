export type Color = 'white' | 'black';
export type Role = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn' | 'cancellor' | 'archbishop' | 'ferz' | 'met' | 'gold' | 'silver' | 'lance'| 'ppawn' | 'pknight' | 'pbishop' | 'prook' | 'psilver' | 'plance' | 'advisor' | 'cannon' | 'hawk' | 'elephant';
export type Key =  'a0' | 'b0' | 'c0' | 'd0' | 'e0' | 'f0' | 'g0' | 'h0' | 'i0' | 'j0' | 'a1' | 'b1' | 'c1' | 'd1' | 'e1' | 'f1' | 'g1' | 'h1' | 'i1' | 'j1' | 'a2' | 'b2' | 'c2' | 'd2' | 'e2' | 'f2' | 'g2' | 'h2' | 'i2' | 'j2' | 'a3' | 'b3' | 'c3' | 'd3' | 'e3' | 'f3' | 'g3' | 'h3' | 'i3' | 'j3' | 'a4' | 'b4' | 'c4' | 'd4' | 'e4' | 'f4' | 'g4' | 'h4' | 'i4' | 'j4' | 'a5' | 'b5' | 'c5' | 'd5' | 'e5' | 'f5' | 'g5' | 'h5' | 'i5' | 'j5' | 'a6' | 'b6' | 'c6' | 'd6' | 'e6' | 'f6' | 'g6' | 'h6' | 'i6' | 'j6' | 'a7' | 'b7' | 'c7' | 'd7' | 'e7' | 'f7' | 'g7' | 'h7' | 'i7' | 'j7' | 'a8' | 'b8' | 'c8' | 'd8' | 'e8' | 'f8' | 'g8' | 'h8' | 'i8' | 'j8' | 'a9' | 'b9' | 'c9' | 'd9' | 'e9' | 'f9' | 'g9' | 'h9' | 'i9' | 'j9';
export type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j';
export type Rank = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
export type FEN = string;
export type Pos = [number, number];
export interface Piece {
  role: Role;
  color: Color;
  promoted?: boolean;
}
export interface Drop {
  role: Role;
  key: Key;
}
export interface Pieces {
  [key: string]: Piece | undefined;
}
export interface PiecesDiff {
  [key: string]: Piece | undefined;
}

export type KeyPair = [Key, Key];

export type NumberPair = [number, number];

export type NumberQuad = [number, number, number, number];

export interface Dests {
  [key: string]: Key[]
}

export interface Elements {
  board: HTMLElement;
  container: HTMLElement;
  ghost?: HTMLElement;
  svg?: SVGElement;
}
export interface Dom {
  elements: Elements,
  bounds: Memo<ClientRect>;
  redraw: () => void;
  redrawNow: (skipSvg?: boolean) => void;
  unbind?: Unbind;
  destroyed?: boolean;
  relative?: boolean; // don't compute bounds, use relative % to place pieces
}
export interface Exploding {
  stage: number;
  keys: Key[];
}

export interface MoveMetadata {
  premove: boolean;
  ctrlKey?: boolean;
  holdTime?: number;
  captured?: Piece;
  predrop?: boolean;
}
export interface SetPremoveMetadata {
  ctrlKey?: boolean;
}

export type WindowEvent = 'onscroll' | 'onresize';

export type MouchEvent = MouseEvent & TouchEvent;

export interface KeyedNode extends HTMLElement {
  cgKey: Key;
}
export interface PieceNode extends KeyedNode {
  cgPiece: string;
  cgAnimating?: boolean;
  cgFading?: boolean;
  cgDragging?: boolean;
}
export interface SquareNode extends KeyedNode { }

export interface Memo<A> { (): A; clear: () => void; }

export interface Timer {
  start: () => void;
  cancel: () => void;
  stop: () => number;
}

export type Redraw = () => void;
export type Unbind = () => void;
export type Milliseconds = number;
export type KHz = number;

export const files: File[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
export const ranks: Rank[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export interface BoardDimensions {
  width: number;
  height: number;
}

export const enum Geometry {dim8x8, dim9x9, dim10x8, dim9x10, dim10x10};

export const dimensions: BoardDimensions[] = [{width: 8, height: 8}, {width: 9, height: 9}, {width: 10, height: 8}, {width: 9, height: 10}, {width: 10, height: 10}];
