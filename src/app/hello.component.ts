import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <strong>Pausenzeit bis 09:40</strong>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
        font-size: 100px;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  ngOnInit() {
    console.log("Test der Consolenausgabe");
  }
}
