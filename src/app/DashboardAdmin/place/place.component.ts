
import { Component, AfterViewInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { fabric } from 'fabric';
import { AdminServiceService } from 'src/app/services/Session/admin-service.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements AfterViewInit {
  canvas: any;
  rectangles: any[] = [];
  selectedRectInfo: any = null;
  constructor(
   
    private adminService: AdminServiceService,
    private _dialogue : MatDialogRef<PlaceComponent>,@Inject(MAT_DIALOG_DATA) public data: { id: any },
  ) {console.log(data.id);}
    ngAfterViewInit() {
    this.canvas = new fabric.Canvas('canvas', { width: 480, height: 600 });
    
    fabric.Image.fromURL('assets/floor-plan.jpg', (img) => {
      img.scaleToWidth(this.canvas.width);
      img.scaleToHeight(this.canvas.height);
      this.canvas.setBackgroundImage(img, this.canvas.renderAll.bind(this.canvas));
    });

    this.canvas.on('mouse:down', (event: any) => {
      if (event.target) {
        const rect = this.rectangles.find(rect => rect.id === event.target.id);
        this.selectedRectInfo = rect;
      } else {
        this.selectedRectInfo = null;
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Delete' || event.key === 'Backspace') {
        this.deleteSelectedRectangle();
      }
    });
  }

  addRectangle(type: string, event: MouseEvent) {
    if (event && this.canvas) {
      const fill = type === 'diamond' ? 'blue' : type === 'gold' ? 'yellow' : type ==='porte' ? 'black'  : 'grey';
      
      // Obtenir les coordonnées du curseur de la souris par rapport au canevas
      const pointer = this.canvas.getPointer(event);
      const offsetX = pointer.x;
      const offsetY = pointer.y;
  
      // Créer le rectangle avec les coordonnées initiales
      const rect: any = new fabric.Rect({
        width: 50,
        height: 50,
        left: offsetX,
        top: offsetY,
        fill: fill,
        lockScalingX: true, // Verrouiller la mise à l'échelle en largeur
        lockScalingY: true, // Verrouiller la mise à l'échelle en hauteur
        lockRotation: true, // Interdire la rotation
      hasControls: false, // Masquer les bordures de redimensionnement et de rotation
      hasBorders: false // Masquer les bordures du rectangle
      });
  
      // Définir les propriétés supplémentaires du rectangle
      rect.set('id', this.rectangles.length + 1);
      rect.set('priceStand', type === 'diamond' ? 100 : type === 'gold' ? 75 : 0);
      rect.set('type', type);
      
      // Ajouter le rectangle au canevas
      this.canvas.add(rect);
  
      // Mettre à jour les coordonnées lors du déplacement du rectangle
      rect.on('modified', () => {
        const updatedX = rect.left;
        const updatedY = rect.top;
  
        // Mettre à jour les coordonnées du rectangle dans la liste
        const index = this.rectangles.findIndex(item => item.id === rect.id);
        if (index !== -1) {
          this.rectangles[index].xPosition = updatedX;
          this.rectangles[index].yPosition = updatedY;
        }
      });
  
      // Ajouter le rectangle à la liste des rectangles
      this.rectangles.push({ 
        id: rect.id, 
        priceStand: rect.get('priceStand'), 
        type: type, 
        xPosition: offsetX,
        yPosition: offsetY
      });
  
      console.log(this.rectangles);
    } else {
      console.error('L\'événement est indéfini. Veuillez vérifier que vous transmettez correctement l\'événement depuis le template HTML.');
    }
  }
  

  submitStandsToDatabase() {
    console.log(this.rectangles);

   
    this.rectangles.forEach(rect => {
      const formData: FormData = new FormData();
    
      formData.append('priceStand',rect.priceStand);
      formData.append('sessionId',this.data.id);
      formData.append('xPosition', rect.xPosition.toString());
      formData.append('yPosition', rect.yPosition.toString());
console.log(formData);
        this.adminService.addStand(formData).subscribe((response) => {
            // Traiter la réponse du backend après l'ajout du stand
            console.log('Stand ajouté:', response);
        });
     });
  }
  deleteSelectedRectangle() {
    if (this.selectedRectInfo) {
      // Trouver le rectangle sélectionné en effectuant une vérification de type
      const selectedRect = this.canvas.getObjects().find((obj:any) => {
        // Vérifier si l'objet est de type fabric.Object et s'il a la propriété 'id'
        if (obj instanceof fabric.Object && 'id' in obj) {
          return (obj as any).id === this.selectedRectInfo.id;
        }
        return false;
      });
  
      if (selectedRect) {
        // Supprimer le rectangle du canvas
        this.canvas.remove(selectedRect);
  
        // Supprimer le rectangle de la liste this.rectangles
        this.rectangles = this.rectangles.filter(rect => rect.id !== this.selectedRectInfo.id);
  
        // Réinitialiser la sélection
        this.selectedRectInfo = null;
      }
    }
  }
  
  
  
}

