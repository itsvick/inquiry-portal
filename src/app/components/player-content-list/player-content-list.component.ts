import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { IFilter } from '../filter/filter.component';
import { SampleContentList } from './sample-content-list';

@Component({
  selector: 'app-player-content-list',
  templateUrl: './player-content-list.component.html',
  styleUrls: ['./player-content-list.component.scss']
})
export class PlayerContentListComponent implements OnInit {

  filteredList = {
    mcq: [],
    sa: []
  };
  filters: IFilter[] = [{
    name: 'Multiple Choice Questions',
    type: 'mcq',
    selected: true,
    color: 'primary',
    options: [
      { name: 'Horizontal Layout', selected: true, color: 'accent', type: 'mcq', category: 'horizontal' },
      { name: 'Vertical Layout', selected: true, color: 'accent', type: 'mcq', category: 'vertical' },
      { name: 'Grid Layout', selected: true, color: 'accent', type: 'mcq', category: 'grid' },
      { name: 'With Solutions', selected: true, color: 'accent', type: 'mcq', category: 'solutions' },
    ],
  },
  {
    name: 'Subjective Questions',
    selected: true,
    color: 'primary',
    type: 'sa'
  }];

  constructor(private router: Router, public navigationService: NavigationService) { }

  ngOnInit(): void {
    this.filteredList.mcq = SampleContentList.mcq;
    this.filteredList.sa = SampleContentList.sa;
    console.log('Filtered List', this.filteredList);
  }

  playContent(content) {
    this.router.navigate(['/player', content.id]);
  }

  resetFilter() {
    this.filteredList = {
      mcq: [],
      sa: []
    }
  }

  onFilterChange(filters: IFilter[]) {
    this.resetFilter();
    filters.map(filter => {
      if (filter.type === 'mcq') {
        if (filter.selected) {
          this.filteredList.mcq = SampleContentList.mcq;
        } else if (filter?.options?.length) {
          const filteredOptions = filter.options.filter(option => option.selected);
          console.log(filteredOptions);
          filteredOptions.map(option => {
            switch (option.category) {
              case 'horizontal':
                this.updateFilterList('mcq', 'horizontal');
                break;
              case 'vertical':
                this.updateFilterList('mcq', 'vertical');
                break;
              case 'grid':
                this.updateFilterList('mcq', 'grid');
                break;
              case 'solutions':
                this.updateFilterList('mcq', 'solutions');
                break;
              default:
                console.warn('Invalid filter option');
            }
          })
        }
      } else if (filter.type === 'sa' && filter.selected) {
        this.filteredList.sa = SampleContentList.sa;
      }
    });

    console.log(this.filteredList);
  }

  updateFilterList(type: string, category: string) {
    const categoryContents = SampleContentList[type].filter(content => content.category === category)
    if (categoryContents.length) {
      this.filteredList[type] = this.filteredList[type].concat(categoryContents);
    }
  }
}
