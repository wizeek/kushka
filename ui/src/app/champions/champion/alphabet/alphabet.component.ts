import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champion.service';
import { buildChampionAlphabet } from '../../list/list.util';

@Component({
    selector: 'app-alphabet',
    templateUrl: './alphabet.component.html',
    styleUrls: [ './alphabet.component.less' ]
})
export class AlphabetComponent implements OnInit {
    championEntries: Array<any>;

    constructor(private championService: ChampionService) {
    }

    ngOnInit() {
        this.championService.getChampionList()
            .subscribe(championList => {
                this.championEntries = buildChampionAlphabet(championList);
            });
    }

}
