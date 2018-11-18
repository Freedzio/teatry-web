/*

private addPlay(event: any) {
    const playProps = {
        title: this.state.title,
        theatre: this.state.theatre,
        category: this.state.category
    };

    for (var i = 0; i < plays.length; i++) {
        if (this.state.title === plays[i].title && this.state.theatre === plays[i].theatre) {
            this.setState({
                isError: true
            });

            return;
        }
    }

    let stateResult: any;

    if (this.state.theatre === '') {
        stateResult = {
            ...stateResult,
            theatreError: true
        };
    }

    if (this.state.category === '') {
        stateResult = {
            ...stateResult,
            categoryError: true
        };
    }

    if (this.state.title === '') {
        stateResult = {
            ...stateResult,
            titleError: true
        };
    }

    if (this.state.isError === false && stateResult.categoryError === false && stateResult.titleError === false && stateResult.theatreError === false) {
        plays.push({
            title: playProps.title,
            theatre: playProps.theatre,
            category: playProps.category
        });

    }
    
    this.setState(stateResult);
}

*/