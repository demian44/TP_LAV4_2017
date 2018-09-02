import { Row } from '../models/row';

export interface IBatallaNavalComponent {
    checkIfWin();
    Misilazo(selectedRow: Row, column: number): void;
}
