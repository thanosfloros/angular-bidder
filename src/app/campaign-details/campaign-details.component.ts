import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign, campaigns } from '../campaigns';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css'],
})
export class CampaignDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  campaign: Campaign | undefined;

  ngOnInit() {
    // First get the campaign id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const campaignIdFromRoute = Number(routeParams.get('campaignId'));

    // Find the product that correspond with the id provided in route.
    this.campaign = campaigns.find(
      (campaign) => campaign.id === campaignIdFromRoute
    );
  }

  addToCart(campaign: Campaign) {
    this.cartService.addToCart(campaign);
    window.alert('Your campaign has been added to the cart!');
  }
}
