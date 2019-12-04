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

        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    Luke Skywalker
                </li>
                <li className="list-group-item">
                    Darth Vader
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
            </ul>
        );
    }
}
