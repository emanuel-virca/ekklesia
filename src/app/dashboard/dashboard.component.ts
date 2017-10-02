import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ResourcesService } from '../resources/shared/resources.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public resources: FirebaseListObservable<any[]>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourcesService: ResourcesService
  ) {
    this.resources = resourcesService.get()
  }

  ngOnInit() {

  }
}
