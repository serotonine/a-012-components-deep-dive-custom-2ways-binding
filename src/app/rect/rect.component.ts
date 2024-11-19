import { Component, EventEmitter, Input, model, Output } from "@angular/core";

@Component({
  selector: "app-rect",
  standalone: true,
  imports: [],
  templateUrl: "./rect.component.html",
  styleUrl: "./rect.component.css",
})
export class RectComponent {
  // OLD WAY (before Angular 17)
  // Todo: Implement custom two-way binding
  /* @Input({ required: true }) sizes!: { width: string; height: string }; */
  // The name is very important => input name + 'Change'.
  /* @Output() sizesChange = new EventEmitter(); */
  // NEW WAY
  sizes = model.required<{ width: string; height: string }>()

  onReset() {
   /* this.sizesChange.emit({
      width: "100",
      height: "100",
    }); */
    this.sizes.set({ width: '100', height: '100'})
  }
}

