import React, { Component } from 'react';

import LooksApiService from "../../services/looks-api-service";

import './item-list.css';

export default class ItemList extends Component {

    looksApiService = new LooksApiService();

    state = {
        items: null,
    };

    componentDidMount() {
        this.looksApiService
            .getAllGarments()
            .then((items) => {
                this.setState({
                    items,
                });
            });
    }

    render() {
        const { items } = this.state;
        const listOfItems = items ? items.map((item) => {
            return (
                <li key={ item.id } className="list-group-item">
                    { item.name }
                </li>
            );
        }) : null;

        return (
            <ul className="item-list list-group">
                { listOfItems }
            </ul>
        );
    }
}
