import Route from '@ember/routing/route';

export default class IndexRoute extends Route {

    model() {
        console.log('model hook')
        store.createRecord('article', { id: 1});
       return this.store.findRecord('article', 1)  // => GET /blog-posts/1
        .then(function(blogPost) {
            // Do something with `blogPost`
        });
    }

}
