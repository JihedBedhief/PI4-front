import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fabric } from 'fabric';
import { StandServiceService } from 'src/app/services/stand-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';

@Component({
  selector: 'app-list-stand',
  templateUrl: './list-stand.component.html',
  styleUrls: ['./list-stand.component.css'],
})
export class ListStandComponent implements AfterViewInit {
  stands: any[] = [];
  selectedStand: any;
  canvas: any;
  idsessions!: number;
  idpack!: number;
  exposant!:number ; 
  email!:string;

  constructor(
    private actR: ActivatedRoute,
    private standService: StandServiceService,

    private reservService: ReservationServiceService,

    private dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.idsessions = Number(this.actR.snapshot.paramMap.get('idsessions'));
    this.idpack = Number(this.actR.snapshot.paramMap.get('idpack'));
    console.log(this.idsessions, this.idpack);
    this.standService.getStandsBySession(this.idsessions).subscribe((data) => {
      this.stands = data;
      console.log(this.stands);
      this.displayStandsOnCanvas();
    });
  }

  handleRectClick(stand: any) {
    console.log('Stand sélectionné:', stand);
    this.selectedStand = stand;
  }

  updateSelectedStandColor() {
    if (this.selectedStand) {
      this.selectedStand.fill = 'red'; // Changement de couleur en rouge
      this.selectedStand.selectable = false; // Rendre le rectangle non cliquable
      this.canvas?.renderAll(); // Mettre à jour le rendu du canvas
    }
  }

  performAction(id: any) {
    const BidDto = {
      // codeitem: a // Example DTO structure, replace with your actual AuctionDTO requirements
      // Add other properties as required e.g. startingBid, auctionDate etc.
      // startDate: new Date(),
      // endDate: ...
    };

    this.standService.chageStauts(id, BidDto).subscribe({
      next: (response) => {
        // Handle response from your backend if necessary
        console.log('Auction created successfully', response);

        // You may want to refresh your item/auction list or navigate
        // this.router.navigate(['/path-to-auction-details', response.id]);
      },
      error: (error) => {
        // Handle any errors here
        console.error('Error creating auction', error);
      },
    });
  }

  reserveStand() {
    // Votre logique de réservation du stand ici
    console.log('Stand réservé:', this.selectedStand);
    this.performAction(this.selectedStand.id);
    // const ress = {
    //   // packType: 'DIAMOND',
    //   // packPrice: this.selectedStand.price,
    //   standNum: this.selectedStand.id,
    //   sessionId: this.idsessions,
    //   sessionLocation: 'aaaaaa',
    //   price: this.selectedStand.price + 33,
    //     ExposantName: 'ayoub',
    // };
    const ress ={
      standNum: this.selectedStand.id,
      sessionId: this.idsessions,
      pack: this.idpack,
      exposant: 12345,
      
      email:this.email,


    };
    
    console.log(ress)
    this.reservService.addItem(ress).subscribe(() => {
      console.log(this.email);

      console.log("cv mrgla")
      }, error => {
      console.error('Error adding item:', error);
    });;

    // Mettre à jour la couleur et la sélection du stand
    this.updateSelectedStandColor();
  }

  displayStandsOnCanvas() {
    this.canvas = new fabric.Canvas('canvas', { width: 800, height: 600 });

    if (!this.canvas) return;

    fabric.Image.fromURL('assets/floor-plan.jpg', (img) => {
      if (!this.canvas) return;
      img.scaleToWidth(this.canvas.width);
      img.scaleToHeight(this.canvas.height);

      this.canvas.setBackgroundImage(
        img,
        this.canvas.renderAll.bind(this.canvas)
      );

      this.stands.forEach((stand) => {
        if (
          stand.xposition !== undefined &&
          stand.yposition !== undefined &&
          stand.reserved == 1
        ) {
          const fabricRect = new fabric.Rect({
            width: 80,
            height: 80,
            left: stand.xposition,
            top: stand.yposition,
            fill: 'red',
            selectable: false,
          });
          console.log(stand.yposition);

          fabricRect.on('mousedown', () => {
            this.handleRectClick(stand);
          });

          this.canvas?.add(fabricRect);
        } else if (
          stand.xposition !== undefined &&
          stand.yposition !== undefined &&
          stand.reserved == 0
        ) {
          const fabricRect = new fabric.Rect({
            width: 80,
            height: 80,
            left: stand.xposition,
            top: stand.yposition,
            fill: 'green',
            selectable: false,
          });
          console.log(stand.yposition);

          fabricRect.on('mousedown', () => {
            this.handleRectClick(stand);
          });

          this.canvas?.add(fabricRect);
        } else {
          console.error(
            'Coordonnées de position manquantes pour le stand:',
            stand
          );
        }
      });
    });
  }
  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Confirmez-vous la réservation du stand?' }, // Message de confirmation à afficher dans la boîte de dialogue
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Si l'utilisateur a confirmé, réservez le stand
        this.reserveStand();
      }
    });
  }
}
