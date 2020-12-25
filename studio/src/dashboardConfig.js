export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fe53bb8d3fff97562fec2a3',
                  title: 'Sanity Studio',
                  name: 'blog-studio-6iph3hks',
                  apiId: '1f829dd9-3551-4f47-992b-e43e9163e154'
                },
                {
                  buildHookId: '5fe53bb869f90d6b557cd6c1',
                  title: 'Blog Website',
                  name: 'blog-web-uoopeokx',
                  apiId: '10fbbc6b-4da7-4621-8d22-4306bccf0057'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/selkasse/blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-web-uoopeokx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
