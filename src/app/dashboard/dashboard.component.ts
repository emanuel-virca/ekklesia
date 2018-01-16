import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ResourcesService } from '../resources/shared/resources.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public resources: FirebaseListObservable<any[]>;
  @ViewChild('modalContent') private modalContent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourcesService: ResourcesService,
    private modalService: NgbModal
  ) {
    this.resources = resourcesService.get()
  }

  ngOnInit() {
    //this.modalService.open(this.modalContent, { size: 'lg' });
  }
}
