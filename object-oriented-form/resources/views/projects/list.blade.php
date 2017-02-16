@foreach($projects as $project)
    <p>{{  $project->name }} - {{  $project->description }}</p>
@endforeach