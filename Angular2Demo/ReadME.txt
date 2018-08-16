<h1>{{pageheader + getFullName()}}</h1>    
<img src="{{imagesource}}" />
<my-employee></my-employee>
<br/> <br/>
                   
<button disabled = '{{isDisable}}'>Click ME</button>
<button [disabled] = 'isDisable'>Click ME</button>
<button class='{{applyColorClasses}}'>My Style Button</button>
<br/> <br/>

<button [ngClass]='getButtonstyle()'>My Style Button</button>
<button [ngStyle]='getStyle()'>My Style Button</button>











IN Html.Employee

<input type="text" [value] ="name" (input)="name=$event.target.value" />
    <br /><br />

    {{name}}