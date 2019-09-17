import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanRoutingModule } from './kanban-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Material
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';
import { BoardDialogComponent } from './dialogs/board-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog.component';

const components = [BoardListComponent, BoardComponent];
const modules = [
  CommonModule,
  KanbanRoutingModule,
  SharedModule,
  FormsModule,
  DragDropModule,
  MatDialogModule,
  MatButtonToggleModule,
];

@NgModule({
  declarations: [...components, BoardDialogComponent, TaskDialogComponent],
  imports: [...modules],
  entryComponents: [BoardDialogComponent, TaskDialogComponent],
})
export class KanbanModule {}
