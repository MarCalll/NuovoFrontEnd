
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatAutocompleteModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTreeModule } from '@angular/material';
import { MomentDateModule } from '@angular/material-moment-adapter';
@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDividerModule,
    MatStepperModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSortModule,
    MatAutocompleteModule,
    MomentDateModule,
    NgxMatMomentModule,
    MatGridListModule,
    ScrollingModule,
    MatTreeModule,
    MatOptionModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDividerModule,
    MatStepperModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSortModule,
    MatAutocompleteModule,
    MomentDateModule,
    NgxMatMomentModule,
    MatGridListModule,
    ScrollingModule,
    MatTreeModule,
    MatOptionModule,
    MatSidenavModule
  ],
  declarations: [],
  providers: []
})


export class MaterialModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialModule,
      providers: []
    };
  }
}
