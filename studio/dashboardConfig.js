export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb056319997392a33505c76',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8zt5xqyb',
                  apiId: 'd7917cd2-40b3-4b6d-87af-416fc6f1a15d'
                },
                {
                  buildHookId: '5fb05631a30abc23d454b22a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-j4t5dtxd',
                  apiId: '4b4f07e2-7a04-42c0-b7d5-da307b186154'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ltwebb/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-j4t5dtxd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
