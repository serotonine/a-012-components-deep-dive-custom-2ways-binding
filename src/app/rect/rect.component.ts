import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-rect",
  standalone: true,
  imports: [],
  templateUrl: "./rect.component.html",
  styleUrl: "./rect.component.css",
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input({ required: true }) sizes!: { width: string; height: string };
  // The name is very important => input name + 'Change'.
  @Output() sizesChange = new EventEmitter();

  onReset() {
    this.sizesChange.emit({
      width: "100",
      height: "100",
    });
  }
}
